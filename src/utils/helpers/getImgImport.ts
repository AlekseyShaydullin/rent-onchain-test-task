import { MutableRefObject } from 'react';

/**
 * Функция получения адреса картинки
 * @param name Передаём название файла картинки, без расширения.
 * @param importedIconRef Рефф ссылки на картинку
 * @returns Возвращает Promise с ссылкой на картинку.
 */
export const getImgImport = async (
  name: string,
  importedIconRef: MutableRefObject<string>
): Promise<string> => {
  /** Необходимо убедиться, что все картинки располежены в одной директории */
  /** Если в коде большая база картинок, то следует в пропсах прокидывать и iconPath */
  importedIconRef.current = (
    await import(`../../assets/image/${name}.jpg`)
  ).default;

  return importedIconRef.current;
};
