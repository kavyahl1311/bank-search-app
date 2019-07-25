import React, { Component } from 'react';

class BankList extends Component {
    render() {
        return (
            <div>
                <table className="ui celled padded table">
                    <thead>
                        <tr>
                            <th className="single line">Evidence Rating</th>
                            <th>ifsc</th>
                            <th>bank_id</th>
                            <th>branch</th>
                            <th>address</th>
                            <th>city</th>
                            <th>district</th>
                            <th>state</th>
                            <th>bank_name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h2 className="ui center aligned header">A</h2>
                            </td>
                            <td className="single line">
                                Power Output
                            </td>
                            <td>
                                <div className="ui star rating" data-rating="3" data-max-rating="3"></div>
                            </td>
                            <td className="right aligned">
                                80% <br />
                                <a href="#">18 studies</a>
                            </td>
                            <td>Creatine supplementation is the reference compound for increasing muscular creatine levels; there is variability in this increase, however, with some nonresponders.</td>
                        </tr>
                        <tr>
                            <td>
                                <h2 class="ui center aligned header">A</h2>
                            </td>
                            <td class="single line">
                                Weight
                            </td>
                            <td>
                                <div class="ui star rating" data-rating="3" data-max-rating="3"></div>
                            </td>
                            <td class="right aligned">
                                100% <br />
                                <a href="#">65 studies</a>
                            </td>
                            <td>Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess potency</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr><th colspan="5">
                            <div class="ui right floated pagination menu">
                                <a class="icon item">
                                    <i class="left chevron icon"></i>
                                </a>
                                <a class="item">1</a>
                                <a class="item">2</a>
                                <a class="item">3</a>
                                <a class="item">4</a>
                                <a class="icon item">
                                    <i class="right chevron icon"></i>
                                </a>
                            </div>
                        </th>
                        </tr></tfoot>
                </table>
            </div>
        );
    }
}

export default BankList;