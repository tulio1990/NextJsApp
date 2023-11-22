import { parseISO, format } from 'date-fns';

interface DateProps {
  dateString: string;
}

const Date: React.FC<DateProps> = ({ dateString }) => {
  const date = parseISO(dateString);
  const formattedDate: string = format(date, 'LLLL d, yyyy');

  return <time dateTime={dateString}>{formattedDate}</time>;
};

export default Date;