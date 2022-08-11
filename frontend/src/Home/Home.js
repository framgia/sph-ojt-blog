import React from 'react';
import NavBar from '../Navbar/NavBar';
import { Grid, Placeholder, Segment } from 'semantic-ui-react'
import './Home.css';

function Home(){
    return (
        <div>
            <div className='auth-button'>
                <button className='ui right floated button secondary'>Log In </button>
                <button className='ui right floated button secondary'>Sign Up </button>
            </div>
            <div>
               <NavBar /> 
            </div>
            <div>
                <h1 className='ui center aligned header'>"POSTS THAT MATTERS"</h1>
            </div>
          
            <div className='featured-article'>
            <div className='featured-article-photo'>
             
            </div>
              <div className='fetuared-article-details'>
                <div className='featured-article-title'>Article Title</div>
                <div className='featured-article-desc'>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec pretium tellus. Integer pulvinar, odio pharetra bibendum commodo, velit nibh dignissim turpis, ac mollis eros eros et risus. Duis tempus quam magna, eget vestibulum nibh gravida ut. Vivamus non velit nulla. Duis a efficitur mi. Cras tincidunt a dolor sagittis pellentesque. Sed dapibus, eros non commodo lobortis, velit nisl porta enim, vitae malesuada justo libero faucibus ante.</div>
                <div className='featured-article-author'>
                    <div className='avatar'></div>
                    <div className='author'>
                        <div>Username</div>
                        <div>08/11/22</div>
                    </div>
                </div>
              </div>
            </div>
            <div className='ui hidden divider'></div>
            <div className='ui hidden divider'></div>
            <div className='ui hidden divider'></div>
            <div className='ui hidden divider'></div>
            <div className='ui hidden divider'></div>
            <div className='ui hidden divider'></div>
            <div className="placholders-temp">
                <Grid columns={3} stackable>
                    <Grid.Column>
                        <Segment raised>
                            <Placeholder>
                                <Placeholder.Header image>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Header>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line length='medium' />
                                    <Placeholder.Line length='short' />
                                </Placeholder.Paragraph>
                            </Placeholder>
                        </Segment>
                    </Grid.Column>

                    <Grid.Column>
                        <Segment raised>
                            <Placeholder>
                                <Placeholder.Header image>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Header>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line length='medium' />
                                    <Placeholder.Line length='short' />
                                </Placeholder.Paragraph>
                            </Placeholder>
                        </Segment>
                    </Grid.Column>

                    <Grid.Column>
                        <Segment raised>
                            <Placeholder>
                                <Placeholder.Header image>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Header>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line length='medium' />
                                    <Placeholder.Line length='short' />
                                </Placeholder.Paragraph>
                            </Placeholder>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
            
            <div className='placholders-temp'>
                <Grid columns={3} stackable>
                    <Grid.Column>
                        <Segment raised>
                            <Placeholder>
                                <Placeholder.Header image>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Header>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line length='medium' />
                                    <Placeholder.Line length='short' />
                                </Placeholder.Paragraph>
                            </Placeholder>
                        </Segment>
                    </Grid.Column>

                    <Grid.Column>
                        <Segment raised>
                            <Placeholder>
                                <Placeholder.Header image>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Header>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line length='medium' />
                                    <Placeholder.Line length='short' />
                                </Placeholder.Paragraph>
                            </Placeholder>
                        </Segment>
                    </Grid.Column>

                    <Grid.Column>
                        <Segment raised>
                            <Placeholder>
                                <Placeholder.Header image>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Header>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line length='medium' />
                                    <Placeholder.Line length='short' />
                                </Placeholder.Paragraph>
                            </Placeholder>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    );
}

export default Home