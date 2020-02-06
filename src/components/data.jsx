import React from 'react'
import { observer } from 'mobx-react'
import Form from './Form';
import AxiosService from '../service/service'
const service = new AxiosService;
class Data extends React.Component {

    submitReview = (e) => {
        console.log(e.target.value);

        e.preventDefault();
        const review = this.review.value;
        const stars = Number(this.stars.value);
        this.props.store.addReview({ review, stars })
    };
    componentDidMount() {
        this.getNotes()
    }
    getNotes() {
        service.getNotes().then((res) => {
            console.log(res.data.data.data);


            this.props.store.reviewList = res.data.data.data
        })

    }
    login = (e) => {

        e.preventDefault();
        console.log(this.password.value);
        let data = {
            email: this.email.value,
            password: this.password.value
        }
        console.log(data);
        service.login(data)
            .then((response) => {
                console.log(response);
                const review = response.data.id
                localStorage.setItem('token', response.data.id)
                const stars = 5
                this.props.store.addReview({ review, stars })


            }).catch((err) => {
                console.log(err);

            })

        const email = this.email.value;

        console.log(email);

        // const stars = Number(this.stars.value);
        // this.props.store.addReview({review, stars})
    }

    render() {

        console.log("data calling ", this.props.store.reviewList);


        var list = this.props.store.reviewList.map((e, i) => {
            return (
                <div> {e.review}        </div>
            )

        }


        )
        return (
            <div>
                {list}
                <form onSubmit={this.login}>


                    <div>  email:
                <input type="text" name="email" ref={node => {
                            this.email = node;
                        }} id="review" placeholder="Write a review" className="form-control" />
                    </div>
                    <div>
                        password:     <input type="text" name="password" ref={node => {
                            this.password = node;
                        }} id="review" placeholder="Write a review" className="form-control" />
                    </div>


                    <button type="submit"> login</button>
                </form>

            </div>
        )

    }
}
export default observer(Data);
