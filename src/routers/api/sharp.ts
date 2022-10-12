// importing sharp module to handle image professionally
import sharp from 'sharp';

import path from 'path';

/*
resize function takes the name of image & heigt & width and after resizing 
it will write the output to a Buffer
*/
async function resize(
  name: string,
  height: number,
  width: number
): Promise<Buffer> {
  return sharp(path.resolve(`images/${name}.jpg`))
    .resize({
      width: width,
      height: height,
    })
    .toBuffer();
}

/*imprtant function takes the name of image & heigt & width then return the path of the resized image
and rename the image
*/
const resizedImagePath = (
  name: string,
  height: number,
  width: number
): string => {
  return `output/${name}_${height}_${width}.jpg`;
};
export { resize, resizedImagePath };
