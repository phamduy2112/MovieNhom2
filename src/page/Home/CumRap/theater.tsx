import IconTheater from './IconTheater/iconTheater';
import InformationTheater from './InformationTheater/informationTheater';

function Theater() {
  return (
    <div className='container'>
        <div className='border border-indigo-600 flex' style={{width:'100%', height:'500px',overflowX:'hidden',overflowY:'auto'}}>
            
            <IconTheater/>
            <div className="w-11/12">
                <InformationTheater></InformationTheater>
            </div>
          
            </div>
      
    </div>
  )
}

export default Theater
