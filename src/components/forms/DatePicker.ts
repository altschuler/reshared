// date-fns compatible ant DatePicker
import { Dayjs } from 'dayjs';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/lib/date-picker/generatePicker';
//import 'antd/lib/date-picker/style/index';

export const DatePicker = generatePicker<Dayjs>(dateFnsGenerateConfig);
