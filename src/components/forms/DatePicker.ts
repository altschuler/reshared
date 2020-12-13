// date-fns compatible ant DatePicker
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import generatePicker from 'antd/lib/date-picker/generatePicker';
//import 'antd/lib/date-picker/style/index';

export const DatePicker = generatePicker<Date>(dateFnsGenerateConfig);
