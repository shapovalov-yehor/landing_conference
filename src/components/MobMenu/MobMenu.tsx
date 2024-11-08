import { navItems } from '@/data/data';
import styles from './MobMenu.module.css';
import Icon from '@/helpers/Icon';

type MobMenuProps = {
  isMenuOpen: boolean;
  closeMenu: () => void;
};

export default function MobMenu({ isMenuOpen, closeMenu }: MobMenuProps) {
  return (
    <div
      onClick={closeMenu}
      className={`${styles.mobile_wrap} ${
        isMenuOpen && styles.mobile_menu_open
      }`}
    >
      <div
        className={styles.burger_menu}
        onClick={event => event.stopPropagation()}
      >
        <a className={styles.logo_wrap} href="/">
          <Icon name="icon-logo" width={48} height={40} />
          <span className={styles.logo_text}>MUSTAGE</span>
        </a>

        <nav>
          <ul>
            {navItems.map((item, index) => (
              <li
                className={styles.mobile_link}
                key={index}
                onClick={closeMenu}
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
