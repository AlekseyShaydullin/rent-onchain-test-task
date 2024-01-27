import { forwardRef } from 'react';
import cn from 'classnames';

import style from './buttonIconText.module.scss';

import Icon from '../../icon/icon';
import Typography from '../../typography/typography';

interface IButtonIconText {
  /**
   * Укажите название файла иконки, без его расширения
   */
  icon?: string;
  /**
   * Укажите тег title: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
   */
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
  /**
   * Укажите Font Family
   * */
  fontFamily: 'primary' | 'secondary';
  /**
   * Укажите название кнопки
   * */
  title: string;
  /**
   * Если иконка монохромная укажите значение true
   * */
  isColored?: boolean;
  /**
   * Cтилизация самой кнопки: цвет, размер, дополнительные анимации
   * */
  buttonClass?: string;
  /** Cтилизация иконки: цвет, размер, дополнительные анимации */
  iconClass?: string;
  /**
   * Cтилизация текста: цвет, размер, ховеры
   * */
  titleClass?: string;
  /**
   * Обозначаем, какой цвет текста. По умолчанию 'white'
   */
  color?: 'black' | 'gray' | 'darkGray' | 'violet';
  /**
   * Можно управлять стилизацией. Иконка первая? тогда пиши true
   * */
  iconFirst?: boolean;
  /**
   * callback при клике на кнопку
   */
  onClick?: () => void;
  /**
   * ID кнопки
   */
  id?: string;
}

type Ref = HTMLButtonElement;

/**
 * Компонент-обёртка для кнопок с иконками и текстом
 * @example
 * <ButtonIconText
 *    icon="chevron"
 *    tag="h2"
 *    fontFamily={'primary'}
 *    title="Название кнопки"
 *    isColored={true}
 *    buttonClass={style.button}
 *    iconClass={style.icon}
 *    titleClass={style.title}
 *    color={'black'}
 *    iconFirst={true}
 *    onClick={onClick}
 *    id={id}
 * />
 */
const ButtonIconText = forwardRef<Ref, IButtonIconText>(
  (
    {
      icon,
      tag,
      fontFamily,
      title,
      buttonClass,
      iconClass,
      titleClass,
      color,
      isColored,
      iconFirst,
      onClick,
      id,
    },
    ref
  ): JSX.Element => {
    return (
      <button
        className={cn(style[`button`], buttonClass)}
        onClick={onClick}
        ref={ref}
        id={id}
      >
        {icon && isColored ? (
          <>
            {!iconFirst && (
              <Typography
                tag={tag}
                fontFamily={fontFamily}
                extraClass={titleClass}
                color={color}
              >
                {title}
              </Typography>
            )}
            <Icon name={icon} isColored={isColored} extraClass={iconClass} />
            {iconFirst && (
              <Typography
                tag={tag}
                fontFamily={fontFamily}
                extraClass={titleClass}
                color={color}
              >
                {title}
              </Typography>
            )}
          </>
        ) : (
          <Typography
            tag={tag}
            fontFamily={fontFamily}
            extraClass={titleClass}
            color={color}
          >
            {title}
          </Typography>
        )}
      </button>
    );
  }
);

export default ButtonIconText;
