import express from 'express';
import path from 'path';
import { resize, resizedImagePath } from './sharp';
import { promises as fsPromises } from 'fs';
import fs from 'fs';

const proccessor_route = express.Router();

// array of the correct names in 'images' folder
const pic_names: string[] = [
  'encenadaport',
  'fjord',
  'icelandwaterfall',
  'palmtunnel',
  'santamonica',
];

// main endpoint
proccessor_route.get(
  '/',
  async (req: express.Request, res: express.Response) => {
    try {
      const nameOfImg = req.query.name as string;
      // here i used parsInt because resizedImagePath & resize functions take number not string
      const heightOfImg = parseInt(req.query.height as string);
      const widthOfImg = parseInt(req.query.width as string);
      // here i used resizedImagePath
      const imgLocation_output: string = resizedImagePath(
        nameOfImg,
        heightOfImg,
        widthOfImg
      );

      // testing if the name is one of names in pic_names
      const exactName = pic_names.includes(nameOfImg);
      // this condition checks if the user send name of image
      if (nameOfImg === undefined) {
        return res
          .status(400)
          .send('Request failed, you have to pass the name of the image');
      } else if (exactName === false) {
        //this condition checks if the user send valid name of image
        return res.status(400).send('Request failed, unvalid name');
      } else if (isNaN(heightOfImg) || isNaN(widthOfImg)) {
        //this condition checks if the user send height & width
        return res
          .status(400)
          .send('Request failed, You must provide height and width');
      } else if (heightOfImg < 0) {
        //this condition checks if the user send valid height
        return res
          .status(400)
          .send('Request failed, unvalid height, must be positive integer');
      } else if (widthOfImg < 0) {
        //this condition checks if the user send valid width
        return res
          .status(400)
          .send('Request failed, unvalid width, must be positive integer');
      } else if (!fs.existsSync(imgLocation_output)) {
        // fs.existsSync() method is used to synchronously check if a file already exists in the given path or not

        const resizedImage = await resize(nameOfImg, heightOfImg, widthOfImg);

        // fsPromises.writeFile takes the path and the Buffer as optinal then create the image
        await fsPromises.writeFile(imgLocation_output, resizedImage);
      }
      // this line will show the image if it already exists in output folder
      res.status(200).sendFile(path.resolve(imgLocation_output));
    } catch (err) {
      console.log(err);
    }
  }
);

export default proccessor_route;
