/*! firebase-admin v12.0.0 */
"use strict";
/*!
 * Copyright 2020 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteConfig = void 0;
const validator = require("../utils/validator");
const remote_config_api_client_internal_1 = require("./remote-config-api-client-internal");
/**
 * The Firebase `RemoteConfig` service interface.
 */
class RemoteConfig {
    /**
     * @param app - The app for this RemoteConfig service.
     * @constructor
     * @internal
     */
    constructor(app) {
        this.app = app;
        this.client = new remote_config_api_client_internal_1.RemoteConfigApiClient(app);
    }
    /**
     * Gets the current active version of the {@link RemoteConfigTemplate} of the project.
     *
     * @returns A promise that fulfills with a `RemoteConfigTemplate`.
     */
    getTemplate() {
        return this.client.getTemplate()
            .then((templateResponse) => {
            return new RemoteConfigTemplateImpl(templateResponse);
        });
    }
    /**
     * Gets the requested version of the {@link RemoteConfigTemplate} of the project.
     *
     * @param versionNumber - Version number of the Remote Config template to look up.
     *
     * @returns A promise that fulfills with a `RemoteConfigTemplate`.
     */
    getTemplateAtVersion(versionNumber) {
        return this.client.getTemplateAtVersion(versionNumber)
            .then((templateResponse) => {
            return new RemoteConfigTemplateImpl(templateResponse);
        });
    }
    /**
     * Validates a {@link RemoteConfigTemplate}.
     *
     * @param template - The Remote Config template to be validated.
     * @returns A promise that fulfills with the validated `RemoteConfigTemplate`.
     */
    validateTemplate(template) {
        return this.client.validateTemplate(template)
            .then((templateResponse) => {
            return new RemoteConfigTemplateImpl(templateResponse);
        });
    }
    /**
     * Publishes a Remote Config template.
     *
     * @param template - The Remote Config template to be published.
     * @param options - Optional options object when publishing a Remote Config template:
     *    - `force`: Setting this to `true` forces the Remote Config template to
     *      be updated and circumvent the ETag. This approach is not recommended
     *      because it risks causing the loss of updates to your Remote Config
     *      template if multiple clients are updating the Remote Config template.
     *      See {@link https://firebase.google.com/docs/remote-config/use-config-rest#etag_usage_and_forced_updates |
     *      ETag usage and forced updates}.
     *
     * @returns A Promise that fulfills with the published `RemoteConfigTemplate`.
     */
    publishTemplate(template, options) {
        return this.client.publishTemplate(template, options)
            .then((templateResponse) => {
            return new RemoteConfigTemplateImpl(templateResponse);
        });
    }
    /**
     * Rolls back a project's published Remote Config template to the specified version.
     * A rollback is equivalent to getting a previously published Remote Config
     * template and re-publishing it using a force update.
     *
     * @param versionNumber - The version number of the Remote Config template to roll back to.
     *    The specified version number must be lower than the current version number, and not have
     *    been deleted due to staleness. Only the last 300 versions are stored.
     *    All versions that correspond to non-active Remote Config templates (that is, all except the
     *    template that is being fetched by clients) are also deleted if they are more than 90 days old.
     * @returns A promise that fulfills with the published `RemoteConfigTemplate`.
     */
    rollback(versionNumber) {
        return this.client.rollback(versionNumber)
            .then((templateResponse) => {
            return new RemoteConfigTemplateImpl(templateResponse);
        });
    }
    /**
     * Gets a list of Remote Config template versions that have been published, sorted in reverse
     * chronological order. Only the last 300 versions are stored.
     * All versions that correspond to non-active Remote Config templates (i.e., all except the
     * template that is being fetched by clients) are also deleted if they are older than 90 days.
     *
     * @param options - Optional options object for getting a list of versions.
     * @returns A promise that fulfills with a `ListVersionsResult`.
     */
    listVersions(options) {
        return this.client.listVersions(options)
            .then((listVersionsResponse) => {
            return {
                versions: listVersionsResponse.versions?.map(version => new VersionImpl(version)) ?? [],
                nextPageToken: listVersionsResponse.nextPageToken,
            };
        });
    }
    /**
     * Creates and returns a new Remote Config template from a JSON string.
     *
     * @param json - The JSON string to populate a Remote Config template.
     *
     * @returns A new template instance.
     */
    createTemplateFromJSON(json) {
        if (!validator.isNonEmptyString(json)) {
            throw new remote_config_api_client_internal_1.FirebaseRemoteConfigError('invalid-argument', 'JSON string must be a valid non-empty string');
        }
        let template;
        try {
            template = JSON.parse(json);
        }
        catch (e) {
            throw new remote_config_api_client_internal_1.FirebaseRemoteConfigError('invalid-argument', `Failed to parse the JSON string: ${json}. ` + e);
        }
        return new RemoteConfigTemplateImpl(template);
    }
}
exports.RemoteConfig = RemoteConfig;
/**
 * Remote Config template internal implementation.
 */
class RemoteConfigTemplateImpl {
    constructor(config) {
        if (!validator.isNonNullObject(config) ||
            !validator.isNonEmptyString(config.etag)) {
            throw new remote_config_api_client_internal_1.FirebaseRemoteConfigError('invalid-argument', `Invalid Remote Config template: ${JSON.stringify(config)}`);
        }
        this.etagInternal = config.etag;
        if (typeof config.parameters !== 'undefined') {
            if (!validator.isNonNullObject(config.parameters)) {
                throw new remote_config_api_client_internal_1.FirebaseRemoteConfigError('invalid-argument', 'Remote Config parameters must be a non-null object');
            }
            this.parameters = config.parameters;
        }
        else {
            this.parameters = {};
        }
        if (typeof config.parameterGroups !== 'undefined') {
            if (!validator.isNonNullObject(config.parameterGroups)) {
                throw new remote_config_api_client_internal_1.FirebaseRemoteConfigError('invalid-argument', 'Remote Config parameter groups must be a non-null object');
            }
            this.parameterGroups = config.parameterGroups;
        }
        else {
            this.parameterGroups = {};
        }
        if (typeof config.conditions !== 'undefined') {
            if (!validator.isArray(config.conditions)) {
                throw new remote_config_api_client_internal_1.FirebaseRemoteConfigError('invalid-argument', 'Remote Config conditions must be an array');
            }
            this.conditions = config.conditions;
        }
        else {
            this.conditions = [];
        }
        if (typeof config.version !== 'undefined') {
            this.version = new VersionImpl(config.version);
        }
    }
    /**
     * Gets the ETag of the template.
     *
     * @returns The ETag of the Remote Config template.
     */
    get etag() {
        return this.etagInternal;
    }
    /**
     * Returns a JSON-serializable representation of this object.
     *
     * @returns A JSON-serializable representation of this object.
     */
    toJSON() {
        return {
            conditions: this.conditions,
            parameters: this.parameters,
            parameterGroups: this.parameterGroups,
            etag: this.etag,
            version: this.version,
        };
    }
}
/**
* Remote Config Version internal implementation.
*/
class VersionImpl {
    constructor(version) {
        if (!validator.isNonNullObject(version)) {
            throw new remote_config_api_client_internal_1.FirebaseRemoteConfigError('invalid-argument', `Invalid Remote Config version instance: ${JSON.stringify(version)}`);
        }
        if (typeof version.versionNumber !== 'undefined') {
            if (!validator.isNonEmptyString(version.versionNumber) &&
                !validator.isNumber(version.versionNumber)) {
                throw new remote_config_api_client_internal_1.FirebaseRemoteConfigError('invalid-argument', 'Version number must be a non-empty string in int64 format or a number');
            }
            if (!Number.isInteger(Number(version.versionNumber))) {
                throw new remote_config_api_client_internal_1.FirebaseRemoteConfigError('invalid-argument', 'Version number must be an integer or a string in int64 format');
            }
            this.versionNumber = version.versionNumber;
        }
        if (typeof version.updateOrigin !== 'undefined') {
            if (!validator.isNonEmptyString(version.updateOrigin)) {
                throw new remote_config_api_client_internal_1.FirebaseRemoteConfigError('invalid-argument', 'Version update origin must be a non-empty string');
            }
            this.updateOrigin = version.updateOrigin;
        }
        if (typeof version.updateType !== 'undefined') {
            if (!validator.isNonEmptyString(version.updateType)) {
                throw new remote_config_api_client_internal_1.FirebaseRemoteConfigError('invalid-argument', 'Version update type must be a non-empty string');
            }
            this.updateType = version.updateType;
        }
        if (typeof version.updateUser !== 'undefined') {
            if (!validator.isNonNullObject(version.updateUser)) {
                throw new remote_config_api_client_internal_1.FirebaseRemoteConfigError('invalid-argument', 'Version update user must be a non-null object');
            }
            this.updateUser = version.updateUser;
        }
        if (typeof version.description !== 'undefined') {
            if (!validator.isNonEmptyString(version.description)) {
                throw new remote_config_api_client_internal_1.FirebaseRemoteConfigError('invalid-argument', 'Version description must be a non-empty string');
            }
            this.description = version.description;
        }
        if (typeof version.rollbackSource !== 'undefined') {
            if (!validator.isNonEmptyString(version.rollbackSource)) {
                throw new remote_config_api_client_internal_1.FirebaseRemoteConfigError('invalid-argument', 'Version rollback source must be a non-empty string');
            }
            this.rollbackSource = version.rollbackSource;
        }
        if (typeof version.isLegacy !== 'undefined') {
            if (!validator.isBoolean(version.isLegacy)) {
                throw new remote_config_api_client_internal_1.FirebaseRemoteConfigError('invalid-argument', 'Version.isLegacy must be a boolean');
            }
            this.isLegacy = version.isLegacy;
        }
        // The backend API provides timestamps in ISO date strings. The Admin SDK exposes timestamps
        // in UTC date strings. If a developer uses a previously obtained template with UTC timestamps
        // we could still validate it below.
        if (typeof version.updateTime !== 'undefined') {
            if (!this.isValidTimestamp(version.updateTime)) {
                throw new remote_config_api_client_internal_1.FirebaseRemoteConfigError('invalid-argument', 'Version update time must be a valid date string');
            }
            this.updateTime = new Date(version.updateTime).toUTCString();
        }
    }
    /**
     * @returns A JSON-serializable representation of this object.
     */
    toJSON() {
        return {
            versionNumber: this.versionNumber,
            updateOrigin: this.updateOrigin,
            updateType: this.updateType,
            updateUser: this.updateUser,
            description: this.description,
            rollbackSource: this.rollbackSource,
            isLegacy: this.isLegacy,
            updateTime: this.updateTime,
        };
    }
    isValidTimestamp(timestamp) {
        // This validation fails for timestamps earlier than January 1, 1970 and considers strings
        // such as "1.2" as valid timestamps.
        return validator.isNonEmptyString(timestamp) && (new Date(timestamp)).getTime() > 0;
    }
}
