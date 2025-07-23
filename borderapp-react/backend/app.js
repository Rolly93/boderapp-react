
import express from  'express';
import {fulldateTime} from './models/xmlfilecreate.js'

   const app = express();
   const port = 3000;
   

    app.get('/', (req, res) => {
      const fmttime = fulldateTime()
      res.send(`<h1>This is you actual time on format</h1><br><p>${fmttime}</p>`);


      
    });

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });

  