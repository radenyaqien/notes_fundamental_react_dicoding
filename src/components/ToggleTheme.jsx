
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeConsumer } from '../ThemeContext';
 
function ToggleTheme() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return <button className="btn" onClick={toggleTheme}>{theme === 'light' ? <FaMoon /> : <FaSun />}</button>;
      }}
    </ThemeConsumer>
  );
}
 
export default ToggleTheme;