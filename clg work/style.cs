
        #container {
            width: 800px;
            height: 800px;
            padding: 30px;
            background-color: brown;
            position: relative;

        }

        .children {
            width: 100px;
            height: 100px;
            background: white;
            margin: 4px;
            display: inline-block;

        }
        #container div:first-of-type {
            margin-right: 24px;}
        
        

        #container div:nth-of-type(2){
           position: absolute;
           top: 4%;
           left: 2%;
           background: gray;
           z-index: 0;
        }