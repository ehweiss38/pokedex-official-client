import React from 'react'

const Home=()=>{
    return(
        <div className='panel-block'>
            <article>
                <h4>Welcome to Ethan's PokéDex!</h4>
                <br></br>
                <br></br>
                <p>
                    Here you will find a comprehensive guide to every pokémon to date. Have fun as you explore and learn!
                    For ease of use, this panel contains some helpful navigation tips.
                    <br></br>
                    <ul>
                        <li>
                            On the home page, click on any of the displayed pokémon to learn more.
                        </li>
                        <br></br>
                        <li>
                            On the PokéDex entry pages, you can navigate across tabs for general information, stats, and moves.
                        </li>
                        <br></br>
                        <li>
                            Some pokémon may have more than one form. If so, these tabs appear above the entry. Navigate through them to explore all of a pokémon's varieties.
                        </li>
                        <br></br>
                        <li>
                            This sidebar allows for easy navigation of the site. Use the search bar to search for any pokémon, by name or PokéDex number. The arrow keys allow you to navigate through pokémon sequentially.
                        </li>
                        <br></br>
                        <li>
                            The Random button will return a random pokémon. Give it a try!
                        </li>
                        <br></br>
                        <li>
                            Above this panel, you will find the option to sort by type, generation, region etc. Clicking on the criterion will return further options, and clicking on those will display all pokemon in the given category.
                        </li>
                        <br></br>
                        <li>
                            On the top right corner, you will find links to my GitHub and LinkedIn profiles. Feel free to check out some of my other work!
                        </li>
                    </ul>
                </p>
            </article>
        </div>
    )
}

export default Home