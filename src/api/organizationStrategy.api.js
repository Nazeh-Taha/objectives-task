const headers = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

/**
 * get all objectives data
 * @returns 
 */
export const getObjectives = async () => {
    const getObjectivesUrl = `/objectives/`;
    let objectivesData = []
    try {
      const response = await fetch(getObjectivesUrl, headers);
      
      if(response.ok){
        const data = await response.json();
        objectivesData = data
      }
    } catch (error) {
      console.log('error', error);
    }
    return objectivesData;
  }


/**
 * add new objective
 * @param {String} title 
 * @param {Number} order 
 * @returns 
 */
export const addObjectives = async (title, order) => {
    const addObjectivesUrl = `/objectives/`;
    const objectivesBody = {
        title: title,
        order: order
      }
    const options = {
        ...headers,
        method: 'POST',
        body: JSON.stringify(objectivesBody)
      }
    try {
        const response = await fetch(addObjectivesUrl, options);
        const data = await response.json();
        
        if (response.ok) {
          return {data: data, severity: 'success'};
        }else{
          return {status: true, message: data.detail[0].msg, severity:'error'};
        }
      } catch (error) {
        return {status: true, message: 'ERROR - Try Again Please', severity:'error'};
      }
  }

/**
 * delete objective
 * @param {Number} objectiveId 
 * @returns 
 */
export const deleteObjectives = async (objectiveId) => {
  const deleteObjectivesUrl = `/objectives/${objectiveId}`;
 
  const options = {
      ...headers,
      method: 'DElEtE'
    }
  try {
      const response = await fetch(deleteObjectivesUrl, options);
      const data = await response.json();
      if (response.ok) {
        return {severity: 'success'};
      }else{
        return {status: true, message: data.detail[0].msg, severity:'error'};
      }
    } catch (error) {
      return {status: true, message: 'ERROR - Try Again Please', severity:'error'};
    }
}


/**
 * edit objective
 * @param {String} title 
 * @param {Number} order 
 * @param {Number} objectiveId 
 * @returns 
 */
 export const editObjectives = async (title, order = 0, objectiveId) => {
  const editObjectivesUrl = `/objectives/${objectiveId}`;
  const objectivesBody = {
      title: title,
      order: order
    }
  const options = {
      ...headers,
      method: 'PUT',
      body: JSON.stringify(objectivesBody)
    }
  try {
      const response = await fetch(editObjectivesUrl, options);
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        return {data: data, severity: 'success'};
      }else{
        return {status: true, message: data.detail[0].msg, severity:'error'};
      }
    } catch (error) {
      return {status: true, message: 'ERROR - Try Again Please', severity:'error'};
    }
}