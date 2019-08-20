import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateFleetMetadataInput shape
 */
export interface UpdateFleetMetadataInput {
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string;

  /**
   * <p>The fleet name to display. The existing DisplayName is unset if null is passed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region.</p>
   */
  OptimizeForEndUserLocation?: boolean;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}