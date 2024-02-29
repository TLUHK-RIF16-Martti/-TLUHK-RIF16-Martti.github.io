// load new activity on onload
const showText = (text) => {
  activityText.textContent = text;
}

window.onload = async () => {
  const activity = await getActivity();
  showText(activity.activity);
};

const activityUrl = 'https://www.boredapi.com/api/activity';

const getActivity = async () => {
  const activity = await axios.get(activityUrl);
  return activity.data;
}

const activityButton = document.querySelector('.activity-button');
console.log(activityButton);
const activityText = document.querySelector('.activity-text');
console.log(activityText);

activityButton.addEventListener('click', async () => {
  const activity = await getActivity();
  showText(activity.activity);
});
