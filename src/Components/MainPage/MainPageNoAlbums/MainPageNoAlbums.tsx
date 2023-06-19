import { GreyLine, ImageRow, TextM, TextXl } from "./MainPageNoAlbum.styles";
export const MainPageNoAlbums: React.FC = () => {
  return (
    <div>
      <img
        src="/img/Group.png"
        style={{
          margin: "0 auto",
          display: "flex",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      />
      <TextXl align="center" margin="0">
        Your photos will drop soon.
      </TextXl>
      <TextM>
        You will get a text message when they are ready. It can take up to 48
        hours.
      </TextM>
      <GreyLine />
      <TextXl align="left" margin="10px">
        Browse Art Prints
      </TextXl>
      <ImageRow>
        <img
          src="/img/Frame6.png"
          className="album-image"
          style={{ borderRight: "5px solid #5200ff" }}
        />
        <img
          src="/img/Frame7.png"
          className="album-image"
          style={{ borderRight: "5px solid #5200ff" }}
        />
        <img src="/img/Frame7.png" className="album-image" />
      </ImageRow>
    </div>
  );
};
