import {ThemeContext} from 'context/theme-context';
import {useContext} from 'react';
import './Title.scss';

interface Props {
  title: String;
}

const Title = (props: Props) => {
  const {theme} = useContext(ThemeContext);

  return <p className={`title text--${theme}`}>{props.title}</p>;
};

export default Title;
