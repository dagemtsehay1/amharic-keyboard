import Keys from "./keys";

const Keyboard = (props) => {
    const firstHalf = [
        ["ሀ","ሁ","ሂ","ሃ","ሄ","ህ","ሆ"],
        ["ለ","ሉ","ሊ","ላ","ሌ","ል","ሎ","ሏ"],
        ["ሐ","ሑ","ሒ","ሓ","ሔ","ሕ","ሖ","ሗ"],
        ["መ","ሙ","ሚ","ማ","ሜ","ም","ሞ","ሟ"],
        ["ሠ","ሡ","ሢ","ሣ","ሤ","ሥ","ሦ","ሧ"],
        ["ረ","ሩ","ሪ","ራ","ሬ","ር","ሮ","ሯ"],
        ["ሰ","ሱ","ሲ","ሳ","ሴ","ስ","ሶ","ሷ"],
        ["ሸ","ሹ","ሺ","ሻ","ሼ","ሽ","ሾ","ሿ"],
        ["ቀ","ቁ","ቂ","ቃ","ቄ","ቅ","ቆ","ቇ"],
        ["ቐ","ቑ","ቒ","ቓ","ቔ","ቕ","ቖ"],
        ["በ","ቡ","ቢ","ባ","ቤ","ብ","ቦ","ቧ"],
        ["ቨ","ቩ","ቪ","ቫ","ቬ","ቭ","ቮ","ቯ"],
        ["ተ","ቱ","ቲ","ታ","ቴ","ት","ቶ","ቷ"],
        ["ቸ","ቹ","ቺ","ቻ","ቼ","ች","ቾ","ቿ"],
        ["ኀ","ኁ","ኂ","ኃ","ኄ","ኅ","ኆ","ኇ"],
        ["ነ","ኑ","ኒ","ና","ኔ","ን","ኖ","ኗ"],
        ["ኘ","ኙ","ኚ","ኛ","ኜ","ኝ","ኞ","ኟ"],
        ["አ","ኡ","ኢ","ኣ","ኤ","እ","ኦ","ኧ"]
    ];

    const secondHalf = [
        ["ከ","ኩ","ኪ","ካ","ኬ","ክ","ኮ","ኯ"],
        ["ኸ","ኹ","ኺ","ኻ","ኼ","ኽ","ኾ"],
        ["ወ","ዉ","ዊ","ዋ","ዌ","ው","ዎ"],
        ["ዐ","ዑ","ዒ","ዓ","ዔ","ዕ","ዖ"],
        ["ዘ","ዙ","ዚ","ዛ","ዜ","ዝ","ዞ","ዟ"],
        ["ዠ","ዡ","ዢ","ዣ","ዤ","ዥ","ዦ","ዧ"],
        ["የ","ዩ","ዪ","ያ","ዬ","ይ","ዮ","ዯ"],
        ["ደ","ዱ","ዲ","ዳ","ዴ","ድ","ዶ","ዷ"],
        ["ዸ","ዹ","ዺ","ዻ","ዼ","ዽ","ዾ","ዿ"],
        ["ጀ","ጁ","ጂ","ጃ","ጄ","ጅ","ጆ","ጇ"],
        ["ገ","ጉ","ጊ","ጋ","ጌ","ግ","ጎ","ጏ"],
        ["ጘ","ጙ","ጚ","ጛ","ጜ","ጝ","ጞ","ጟ"],
        ["ጠ","ጡ","ጢ","ጣ","ጤ","ጥ","ጦ","ጧ"],
        ["ጨ","ጩ","ጪ","ጫ","ጬ","ጭ","ጮ","ጯ"],
        ["ጰ","ጱ","ጲ","ጳ","ጴ","ጵ","ጶ","ጷ"],
        ["ጸ","ጹ","ጺ","ጻ","ጼ","ጽ","ጾ","ጿ"],
        ["ፀ","ፁ","ፂ","ፃ","ፄ","ፅ","ፆ","ፇ"],
        ["ፈ","ፉ","ፊ","ፋ","ፌ","ፍ","ፎ","ፏ"],
        ["ፐ","ፑ","ፒ","ፓ","ፔ","ፕ","ፖ","ፗ"],
    ]

    const specialLetters= [
        ["ቈ","ቊ","ቋ","ቌ","ቍ"],
        ["ቘ","ቚ","ቛ","ቜ","ቝ"],
        ["ኈ","ኊ","ኋ","ኌ","ኍ"],
        ["ኰ","ኲ","ኳ","ኴ","ኵ"],
        ["ዀ","ዂ","ዃ","ዄ","ዅ"],
        ["ጐ","ጒ","ጓ","ጔ","ጕ"],
        ["ፘ","ፙ","ፚ"]
    ];

    const punctuation= ["፡","።","፣","፤","፥","፦","፧","፨"];
    const numbers = [
        ["፩","፪","፫","፬","፭","፮","፯","፰"],
        ["፱","፲","፳","፴","፵","፶","፷","፸"],
        ["፹","፺","፻","፼"]
    ];
    return ( 
        <div className="keyboard">
            <div>
                <div className="first-half">
                    {
                        firstHalf.map(keys=>{
                            return <div>
                                {keys.map(key=>{
                                    return <Keys letter={key} onClick={props.onChange}/>
                                })}
                            </div>;
                        })
                    }
                </div>
                <div className="second-half">
                    {
                        secondHalf.map(keys=>{
                            return <div>
                                {keys.map(key=>{
                                    return <Keys letter={key} onClick={props.onChange}/>
                                })}
                            </div>;
                        })
                    }
                </div>
            </div>

            <div className="additional-symbols">
                <div className="first-half">
                <p className="sub-title">Special Letters</p>
                    {
                        specialLetters.map(keys=>{
                            return <div>
                                {keys.map(key=>{
                                    return <Keys letter={key} onClick={props.onChange}/>
                                })}
                            </div>;
                        })
                    }
                </div>
                <div className="second-half">
                    <p className="sub-title">Punctuations</p>
                    <div>
                        {
                        punctuation.map(key=>{
                            return <Keys letter={key} onClick={props.onChange}/>;
                        })
                        }
                    </div>

                    <p className="sub-title">Numbers</p>
                    {
                        numbers.map(keys=>{
                            return <div>
                                {keys.map(key=>{
                                    return <Keys letter={key} onClick={props.onChange}/>
                                })}
                            </div>;
                        })
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Keyboard;