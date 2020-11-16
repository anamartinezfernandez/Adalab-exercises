import React from "react";
import MediaCard from "./MediaCard";
import photo from '../images/photo.jpg';


class MediaList extends React.Component {
  /*   constructor(props) {
      super(props);
    } */
    render() {
      return (
        <section>
          <ul>
            <li>
              <MediaCard 
                name= "Ana Martínez"
                date= "Sábado 31 de octubre de 2020"
                picture={photo}
                text="Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada faucibus massa, quis lectus maecenas tempus euismod cum auctor posuere mollis. Id interdum sem proin lacus maecenas malesuada eleifend curae volutpat, semper habitasse senectus integer magna auctor praesent hac, dis himenaeos convallis tempus blandit ullamcorper vulputate velit. Convallis taciti eget per magnis eros vestibulum nascetur nullam, arcu aenean nisl nunc ultrices donec quisque, vitae suspendisse a rutrum blandit cras cursus"
                likes="8"
                heart=" "
              />
            </li>
            <li>
            <MediaCard 
                name= "Ana Martínez"
                date= "Sábado 31 de octubre de 2020"
                picture={photo}
                text="Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada faucibus massa, quis lectus maecenas tempus euismod cum auctor posuere mollis. Id interdum sem proin lacus maecenas malesuada eleifend curae volutpat, semper habitasse senectus integer magna auctor praesent hac, dis himenaeos convallis tempus blandit ullamcorper vulputate velit. Convallis taciti eget per magnis eros vestibulum nascetur nullam, arcu aenean nisl nunc ultrices donec quisque, vitae suspendisse a rutrum blandit cras cursus"
                likes="8"
                heart=" "
              />
            </li>
            <li>
            <MediaCard 
                name= "Ana Martínez"
                date= "Sábado 31 de octubre de 2020"
                picture={photo}
                text="Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada faucibus massa, quis lectus maecenas tempus euismod cum auctor posuere mollis. Id interdum sem proin lacus maecenas malesuada eleifend curae volutpat, semper habitasse senectus integer magna auctor praesent hac, dis himenaeos convallis tempus blandit ullamcorper vulputate velit. Convallis taciti eget per magnis eros vestibulum nascetur nullam, arcu aenean nisl nunc ultrices donec quisque, vitae suspendisse a rutrum blandit cras cursus"
                likes="8"
                heart=" "
              />
            </li>
          </ul>
        </section>
      );
    }
  }
  
  export default MediaList;
  

