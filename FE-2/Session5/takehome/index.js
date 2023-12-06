//Team Data
const team = [
  {
    id: "anna",
    fullName: "Anna Kendrick",
    jobTitle: "Front-end Ninja",
    bio: "Bibliophile, loves to dive into fictional worlds, ships JS code like brownies",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=annakendrick",
  },
  {
    id: "harry",
    fullName: "Harry Fawn",
    jobTitle: "Illustrator",
    bio: "Creates new illustrations each week, will kill for coffee, and loves beaches",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=harryfawn",
  },
  {
    id: "sofia",
    fullName: "Sofia Sultan",
    jobTitle: "Backend Engineer",
    bio: "Donuts over waffles. Martinis over whiskeys. Typescript over anything.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sofiasulta",
  },
];

//Modify Code below this line

//Content Selected using ID.
const content = document.getElementById("content");

/**
 * Creates and img HTML element with given src and alt
 * @param {string} src - Source for image
 * @param {string} alt - Alt text for image
 * @returns An Image HTML Element
 */
const getImageElement = (src, alt) => {
  const createImg = document.createElement("img");
  createImg.src = src;
  createImg.alt = alt;
  createImg.height = 100;
  createImg.width = 100;
  return createImg;
};

/**
 * Creates a new card with passed parameters.
 * @param {string} id - Unique id from team data
 * @param {string} fullName - Name of the team member
 * @param {string} jobTitle - Job title of the team memeber
 * @param {string} bio - Description Bio
 * @param {string} avatar - Source of the avatar image.
 * @returns section HTML element with Image and Text
 */
function generateCard(id, fullName, jobTitle, bio, avatar) {
  //1. Create a new "section" element and set the className and id
  const newSection = document.createElement("section");
  newSection.className = "newSection__class";
  newSection.id = "newSection__id";
  //2. Generate the image using getImageElement() function
  //Hint - Use fullname as alt for the image.
  const imgDiv = getImageElement(avatar, id);

  //3. Create a div for text content
  const textDiv = document.createElement("div");

  //4. Create an h2 for fullName
  const h2Tag = document.createElement("h2");
  h2Tag.innerText = fullName;

  //5. Create an h3 for jobTitle
  const h3Tag = document.createElement("h3");
  h3Tag.innerText = jobTitle;

  //6. Create a p for bio
  const pTag = document.createElement("p");
  pTag.innerText = bio;

  //7. Append the fullName, jobTitle, and bio element
  //   to the div created for text.
  textDiv.append(h2Tag);
  textDiv.append(h3Tag);
  textDiv.append(pTag);
  //8. Append the Image and the Text div
  //   to the new section you created in step 1
  newSection.append(imgDiv);
  newSection.append(textDiv);

  console.log(newSection);
  //Return the new section element created.

  //applying style class
  newSection.className = "team-member";
  if (id === "anna") newSection.id = "anna";
  if (id === "harry") newSection.id = "harry";
  if (id === "sofia") newSection.id = "sofia";

  return newSection;
}

/**
 * Generates and returns an array of HTML elements
 * @param {Array} data Team data array
 */
function generateCardArray(data) {
  const cards = [];
  //Add logic to populate `cards` array below
  for (let i of data) {
    cards.push(generateCard(i.id, i.fullName, i.jobTitle, i.bio, i.avatar));
  }
  //Return cards array
  return cards;
}
const cardsArray = generateCardArray(team);

//Run a loop for the cardsArray and append its elements to content.
for (let card of cardsArray) {
  console.log(card);
  content.append(card);
}
//Modify Code above this line
