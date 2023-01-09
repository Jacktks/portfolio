import {useContext} from 'react';
import {ThemeContext} from '../../context/theme-context';
import './Tab.scss';

interface Props {
  name: String;
  image: String;
}

const Tab = (props: Props) => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className="tab">
      <div className={`tab-image tab-image--${theme}`}>
        <img src={`${props.image}`} alt={`${props.name}`} />
      </div>
      <span> {props.name}</span>
    </div>
  );
};

export default Tab;
