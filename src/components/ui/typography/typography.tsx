import { FC, ReactNode } from 'react';
import cn from 'classnames';

import style from './typography.module.scss';

type Props = {
  /**
   * тэг-обёртка `'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'`
   */
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  children: ReactNode;
  /**
   * класс для дополнительной стилизации компонента
   */
  extraClass?: string;
  /**
   * Обозначаем, какой цвет текста. По умолчанию 'white'
   */
  color?: 'black' | 'gray' | 'darkGray' | 'violet';
  /**
   * `primary` === `Syncopate`, `secondary` === `Red Hat Display`
   */
  fontFamily?: 'primary' | 'secondary';
};

/**
 * Компонент-обёртка для текстовых элементов
 * @example
 * <Typography
 *   tag="h3"
 *   color="black"
 *   fontFamily="secondary"
 *   extraClass={titleClass}
 *   color={'black'}
 * >
 *  Выводимый текст
 * </Typography>
 */
const Typography: FC<Props> = ({
  tag,
  children,
  extraClass,
  color = 'white',
  fontFamily = 'primary',
}) => {
  const Tag = tag;

  return (
    <Tag
      className={cn(
        style[`${fontFamily}_${tag}`],
        color ? style[`color_${color}`] : ' ',
        extraClass
      )}
    >
      {children}
    </Tag>
  );
};

export default Typography;
