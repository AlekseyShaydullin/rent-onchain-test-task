import { FC, ReactNode } from 'react';
import cn from 'classnames';
import style from './typography.module.scss';

type Props = {
  /**
   * тэг-обёртка `'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'`
   */
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: ReactNode;
  /**
   * класс для дополнительной стилизации компонента
   */
  className?: string;
  color?: 'black' | 'gray' | 'darkGray' | 'violet';
  /**
   * `primary` === `Syncopate`, `secondary` === `Red Hat Display`
   */
  fontFamily?: 'primary' | 'secondary';
};

/**
 * Компонент-обёртка для текстовых элементов
 * @example
 * <Typography tag="h3" fontFamily="syncopate">
 *  Выводимый текст
 * </Typography>
 */
const Typography: FC<Props> = ({
  tag,
  children,
  className,
  color,
  fontFamily = 'primary',
}) => {
  const Tag = tag;

  return (
    <Tag
      className={cn(
        style[`${fontFamily}_${tag}`],
        className,
        color ? style[`color_${color}`] : ''
      )}
    >
      {children}
    </Tag>
  );
};

export default Typography;
