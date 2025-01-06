const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img');
let currentIndex = 0;

const updateLightbox = (index) => {
  const image = images[index];
  if (!image) return;

  // Create image element
  const img = document.createElement('img');
  img.src = image.src;

  // Create description element
  const description = document.createElement('p');
  const title = document.createElement('h4');
  description.classList.add('description');
  title.classList.add('title');

  // Create description content element
  const descriptionContent = document.createElement('div');
  descriptionContent.classList.add('description-content');
  const fullContent = image.getAttribute('data-description');
  const words = fullContent.split(' ');
  const initialContent = words.slice(0, 20).join(' ') + (words.length > 20 ? '...' : '');
  descriptionContent.innerHTML = initialContent;

  // Add "Read More" functionality
  const readMoreButton = document.createElement('button');
  readMoreButton.innerText = 'Read More';
  readMoreButton.classList.add('read-more');
  descriptionContent.appendChild(readMoreButton);

  readMoreButton.addEventListener('click', () => {
    if (descriptionContent.classList.contains('expanded')) {
      descriptionContent.innerHTML = initialContent;
      readMoreButton.innerText = 'Read More';
      descriptionContent.appendChild(readMoreButton);
      img.style.display = 'block'; // Show image
    } else {
      descriptionContent.innerHTML = fullContent;
      readMoreButton.innerText = 'Read Less';
      descriptionContent.appendChild(readMoreButton);
      img.style.display = 'none'; // Hide image
    }
    descriptionContent.classList.toggle('expanded');
  });

  // Choose whether the description is on the right or left
  const side = image.getAttribute('data-side') || 'right'; // Default to right
  if (side === 'right') {
    description.classList.add('description-right');
  } else {
    description.classList.add('description-left');
  }

  title.innerHTML = image.getAttribute('data-title');
  description.innerHTML = image.getAttribute('data-description');

  // Create close button
  const closeButton = document.createElement('button');
  closeButton.innerHTML = '&times;'; // Unicode for a multiplication sign (×)
  closeButton.classList.add('close-button');

  // Create next button
  const nextButton = document.createElement('button');
  nextButton.innerHTML = '>';
  nextButton.classList.add('next-button');

  // Create previous button
  const previousButton = document.createElement('button');
  previousButton.innerHTML = '<';
  previousButton.classList.add('previous-button');

  // Clear existing content in lightbox
  while (lightbox.firstChild) {
    lightbox.removeChild(lightbox.firstChild);
  }
  // Append title above description content
lightbox.appendChild(title); // Now title is added first
lightbox.appendChild(descriptionContent);

  // Append close button, image, and description to lightbox
  lightbox.appendChild(closeButton);
  if (side === 'right') {
    lightbox.appendChild(img);
    lightbox.appendChild(description);
  } else {
    lightbox.appendChild(description);
    lightbox.appendChild(img);
  }

lightbox.appendChild(nextButton);

  // Event listener for next button
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox(currentIndex);
  });

  lightbox.appendChild(previousButton);

  // Event listener for previous button
  previousButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox(currentIndex);
  });

  // Close the lightbox when the close button is clicked
  closeButton.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.classList.remove('lightbox-open'); // Enable body scroll after lightbox closes
  });
};

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentIndex = index;
    lightbox.classList.add('active');
    document.body.classList.add('lightbox-open'); // Prevent body scroll when lightbox is active
    updateLightbox(currentIndex);
  });
});

// Close the lightbox when clicking outside or pressing the close button
lightbox.addEventListener('click', (e) => {
  if (e.target === e.currentTarget || e.target.classList.contains('close-button')) {
    lightbox.classList.remove('active');
    document.body.classList.remove('lightbox-open'); // Enable body scroll after lightbox closes
  }
});