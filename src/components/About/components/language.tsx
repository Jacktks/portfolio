import {useContext} from 'react';
import {ThemeContext} from '../../../context/theme-context';
import './language.scss';

interface Props {
  name: String;
  image: String;
}

const Language = (props: Props) => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className="language">
      <div className={`language-image language-image--${theme}`}>
        <img src={`${props.image}`} alt={`${props.name}`} />
      </div>
      <span> {props.name}</span>
    </div>
  );
};

export default Language;
