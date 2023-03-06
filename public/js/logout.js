const logout = async function() {
  event.preventDefault();

  const response = await fetch('/api/user/logout', {
    method: 'POST',
    body: JSON.stringify({
      
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to logout');
  }
};

document
  .querySelector('#logout-button')
  .addEventListener('click', logout);

