import React from "react";

function Skill() {
  return (
    <div id="skill">
      <section className="bg-gray-900 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-screen-xl">
          <h1 className="text-4xl font-bold text-center text-sky-600 py-10">
            Skill
          </h1>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-6">
            {[
              ["html.png", "HTML5"],
              ["css.png", "CSS3"],
              ["Bootstrap.svg", "Bootstrap"],
              ["scss.png", "Sass"],
              ["tailwind.png", "Tailwind CSS"],
              ["javascript.png", "JavaScript"],
              ["mongodb.png", "MongoDB"],
              ["expressjs.png", "Express JS"],
              ["reactjs.png", "React JS"],
              ["nodejs.png", "Node JS"],
              ["redux.png", "Redux"],
              ["Next.svg", "Next JS"],
              ["shopify.svg", "Shopify"],
              ["wordpress.svg", "WordPress"],
              ["woocommerce.svg", "WooCommerce"],
              ["Php.svg", "PHP"],
              ["laravel.svg", "Laravel"],
              ["database.svg", "SQL"],
              ["mongoose.png", "Mongoose"],
              ["postman.png", "Postman"],
              ["material-ui.png", "Material UI"],
              ["git.png", "Git"],
              ["github.png", "GitHub"],
              
            ].map(([src, title]) => (
              <div
                className="sm:w-1/4 md:w-1/6 w-1/3 lg:w-1/16 flex flex-col items-center"
                key={title}
              >
                <img
                  src={`/assets/${src}`}
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
                  src={`/assets/${src}`}
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
