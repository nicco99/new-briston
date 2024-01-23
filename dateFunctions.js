
export const timeDiff = (dateString)=>{
    const providedDate = new Date(dateString);
    const currentDate = new Date();
    
    // Calculate the difference in milliseconds
    const timeDifference = currentDate - providedDate;
    
    // Calculate days, hours, and minutes
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursDifference = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    
    // Output the result
    let result = '';
    if (daysDifference > 0) {
      result += `${daysDifference} day${daysDifference > 1 ? 's' : ''}`;
    }
    
    if (hoursDifference > 0) {
      result += `${result.length > 0 ? ' ' : ''}${hoursDifference} hour${hoursDifference > 1 ? 's' : ''}`;
    }
    
    if (minutesDifference > 0 && daysDifference === 0) {
      result += `${result.length > 0 ? ' ' : ''}${minutesDifference} minute${minutesDifference > 1 ? 's' : ''}`;
    }
    
    return(result.length > 0 ? `${result} ago` : 'Just now');
}


