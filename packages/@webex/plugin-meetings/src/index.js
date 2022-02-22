import {registerPlugin} from '@webex/webex-core';

import Meetings from './meetings';
import config from './config';

registerPlugin('meetings', Meetings, {
  config
});

export default Meetings;

export * as CONSTANTS from './constants';
