import React from 'react'
import { observer } from 'mobx-react'

import AxiosService from '../service/service'
const service= new AxiosService;
class CreateNote extends React.Component {


    createNotes=(e)=> {

        e.preventDefault();
        console.log(this.title.value);
        let data={
            title:this.title.value,
            description:this.description.value
        }
        console.log(data);
        service.createNote(data)
         .then((response)=>{
            console.log(response);
            const title=this.title.value
          
            const stars=5
            this.props.store.addReview({ title, stars })

            
        }).catch((err)=>{
            console.log(err);
            
        })
        
        const email = this.title.value;
        
        console.log(email);
        
        // const stars = Number(this.stars.value);
        // this.props.store.addReview({review, stars})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.createNotes}>


                    <div>  email:<input type="text" name="title" ref={node => {
                            this.title = node;
                        }} id="review" placeholder="Write a review" className="form-control" />
                    </div>
                    <div>
                        password:     <input type="text" name="description" ref={node => {this.description = node;}} id="review" placeholder="Write a review" className="form-control" />
                    </div>


                    <button type="submit"> create</button>
                </form>
            </div>
        )
    }

}
export default observer(CreateNote);
