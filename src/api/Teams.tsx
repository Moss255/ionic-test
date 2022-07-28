export const getTeams = async () => {
    const response = await fetch(`https://apps.swlstg.nhs.uk/looker/surveys?limit=400`, {
      mode: 'cors',
      method: 'get'
    });

    const data = await response.json();

    return data;    
}