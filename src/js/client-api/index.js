import request from 'superagent'

// To get around cors for now
const localhost = 'http://localhost:5000' 

export async function getHome () {
  try {
    const result = await request.get(localhost + '/api/v1/home/home');
      const home = result.body;
      return home;
  }
  catch (err) {
    throw Error('Cannot get aboutme!');
  }
}

export async function getAboutMe () {
  try {
    const result = await request.get(localhost + '/api/v1/aboutme/aboutme');
      const aboutme = result.body;
      return aboutme;
  }
  catch (err) {
    throw Error('Cannot get aboutme!');
  }
}

export async function getResume () {
  try {
    const result = await request.get(localhost + '/api/v1/resume/resume');
      const resume = result.body;
      return resume;
  }
  catch (err) {
    throw Error('Cannot get resume!');
  }
}
export async function getDevAcademy () {
  try {
    const result = await request.get(localhost + '/api/v1/devacademy/devacademy');
      const devacademy = result.body;
      return devacademy;
  }
  catch (err) {
    throw Error('Cannot get devacademy!');
  }
}