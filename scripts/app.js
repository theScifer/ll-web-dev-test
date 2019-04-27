var images = {
	man: {
		heading: 'Man Image',
		description: 'Image of a man.',
		path: 'img/man.jpg'
	},
	wizard: {
		heading: 'Wizard Image',
		description: 'Image of a wizard.',
		path: 'img/wizard.jpg'
	},
	beast: {
		heading: 'Beast Image',
		description: 'Image of a beast.',
		path: 'img/beast.jpg'
	}
};

var containerDiv = document.getElementById('picture-container');

for (var key in images) {
  var heading = images[key].heading;
  var description = images[key].description;
  var path = images[key].path;

var imgContainer = document.createElement('div');
  imgContainer.setAttribute('class', 'container');
  imgContainer.innerHTML = `
    <div class="overlay">
      <div class="title">${heading}</div>
      <div class="description">${description}</div>
    </div>
  `;

var myImage = document.createElement('img');
  myImage.setAttribute('src', path);
  myImage.setAttribute('title', heading);
  myImage.setAttribute('alt', description);

  containerDiv.appendChild(imgContainer);
  imgContainer.appendChild(myImage);
}
