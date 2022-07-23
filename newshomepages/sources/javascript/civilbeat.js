var styles = `
.poston-campaign, #om-h8bkg1lyokdvbncwkfgg, .Campaign, .CampaignType--popup, .Campaign--css {
  display: none !important;
}
`;
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

document.querySelectorAll(
  '.poston-campaign,#om-h8bkg1lyokdvbncwkfgg,.Campaign,.CampaignType--popup,.Campaign--css'
).forEach(el => el.remove())
