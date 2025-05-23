import React from "react";

function Skill() {
  return (
    <div id="skill">
      <section className="bg-gray-900 dark:bg-gray-900">
        <div className="container mx-auto px-8 py-8">
          <h1 className="text-4xl font-bold text-center text-sky-600 py-10">
            Skill
          </h1>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-10">
            {[
              ["html.png", "HTML5"],
              ["css.png", "CSS3"],
              ["javascript.png", "JavaScript"],
              ["tailwind.png", "Tailwind CSS"],
              ["reactjs.png", "React JS"],
              ["redux.png", "Redux"],
              ["formik-icon.png", "Formik"],
              ["material-ui.png", "Material UI"],
              ["scss.png", "Scss"],
              ["nodejs.png", "Node JS"],
              ["expressjs.png", "Express JS"],
              ["mongodb.png", "MongoDB"],
              ["mongoose.png", "Mongoose"],
              ["git.png", "Git"],
              ["github.png", "GitHub"],
              ["ec2.png", "EC2"],
              ["Amazon-S3.png", "S3"],
            ].map(([src, title]) => (
              <div
                className="sm:w-1/4 md:w-1/6 w-1/3 lg:w-1/16 flex flex-col items-center"
                key={title}
              >
                <img
                  src={`/src/assets/${src}`}
                  alt={title}
                  className="w-[80px] h-[80px]"
                />
                <h1 className="text-xs text-center text-white">{title}</h1>
              </div>
            ))}
          </div>

          <h1 className="text-4xl font-bold text-center text-sky-600 py-10">
            Tools and Software
          </h1>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-10">
            {[
              ["vscode.png", "VS Code"],
              ["ChatGPT.png", "ChatGPT"],
              ["chrome.png", "Chrome"],
              ["Impress.png", "Impress"],
              ["mongodbCompass.png", "Mongodb Compass"],
              ["postman.png", "Postman"],
              ["ubuntu.png", "Ubuntu"],
            ].map(([src, title]) => (
              <div
                className="sm:w-1/4 md:w-1/6 w-1/3 lg:w-1/12 flex flex-col items-center"
                key={title}
              >
                <img
                  src={`/src/assets/${src}`}
                  alt={title}
                  className="w-[80px] h-[80px]"
                />
                <h1 className="text-xs text-center text-white">{title}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skill;
