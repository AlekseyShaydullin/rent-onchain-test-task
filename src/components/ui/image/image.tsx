import { FC, useRef, useState } from 'react';
import { getImgImport } from '../../../utils/helpers/getImgImport';

interface IImage {
  /**
   * Строка для идентификации картинки. Прокидываем название файла картинки, без расширения.
   * */
  name: string;
  /**
   * Cтилизация картинки: размер, дополнительные анимации
   * */
  extraClass: string;
}

/**
 * Компонент-обёртка для Иконок
 * @example
 * <Image name={'albania'} extraClass={style.img} />
 **/
const Image: FC<IImage> = ({ name, extraClass }): JSX.Element => {
  const [img, setImg] = useState<string>('');
  const importedImgRef = useRef<string>('');

  getImgImport(name, importedImgRef)
    .then((res) => setImg(res))
    .catch((err) => console.error(err));

  return (
    <img
      src={img}
      className={extraClass}
      alt={name}
      width="100%"
      height="100%"
    />
  );
};

export default Image;
