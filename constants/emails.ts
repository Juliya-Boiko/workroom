export const registerUserEmailBody = (companyName: string) => `
  <p>You registered ${companyName} in Workrrom App!</p>
`;

export const inviteUserEmailBody = (name: string, companyName: string, link: string) => `
  <p>${name} invite you to jion ${companyName} in Workrrom App!</p>
  <p>Join via <a href="${link}" target="_blank">link</a></p>
`;
