import './index.scss';

const Projects = () => {

  return (
    <div className="container projects-page">
      <div className="text-zone">
        <p>
          <h2>Projects:</h2>
          <div className="container box1">
            <h3>National Park API | <strong>C#, HTML, ASP.NET Core MVC, Razor, MySQL</strong></h3>
            This application hosts an API that contains info of all the national parks in the United States. Built with C#/.NET Core. It also allows users to interact with the database using the swagger user interface.
            <h5>Gitgub:<a href="https://github.com/wilkinsonmatt/National-Park-API.git"><u> Project Link </u></a></h5>
          </div>
          <div className="container box2">
            <h3>Pig Dice | <strong>JavaScrpit, HTML/CSS</strong></h3>
            This project was done in class with another classmate, in HTML, CSS, and Javascript. It is our version of the classic game pig dice. We also added custom pig styling (complete with pig sounds) to add life to the game.
            <h5>Gitgub:<a href="https://github.com/wilkinsonmatt/pig-Dice.git"><u> Project Link </u></a></h5>
          </div>
          <div className="container box3">
            <h3>Pierre's Treats | <strong>C#, HTML, ASP.NET Core MVC, Razor, MySQL</strong></h3>
            A simple MVC web application an application with user authentication and a many-to-many relationship that helps pierre to market his sweet and savory treats.
            <h5>Gitgub:<a href="https://github.com/wilkinsonmatt/Pierres-Sweet-and-Savory-Treats"><u> Project Link </u></a></h5>
          </div>
        </p>
      </div>
    </div>
  );
}
export default Projects