const Assignment1 = () => {
    const name = "Hello World";
    return (
        <h3>{name}</h3>
    );
}

const Assignment2 = () => {
    const obj = { name: "Hello World Object" };
    return (
        <h3>{obj.name}</h3>
    );
}

const Assignment3 = () => {
    const data = ['We', 'are', 'United'];
    return (
        <div>
            {data.map((word, i) => {
                return (
                    <div key={i}>
                        <h3>{word}</h3>
                    </div>
                )
            }
            )}
        </div>
    )
}

const Assignment4 = () => {
    const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }];
    return (
        <div>
            {list.map((paragraph, i) => {
                return (
                    <div key={i}>
                        <h3>{paragraph.name}</h3>
                    </div>
                )
            }
            )}
        </div>
    )
}

const Assignment5 = () => {
    const complex = [{ company: 'XYZ', jobs: ['Javascript,', 'React'] }, { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }];
    return (
        <div>
            {complex.map((words, i) => {
                return (
                    <div key={i}>
                        <h3>company name: {words.company} working as: {words.jobs}</h3>
                    </div>
                )
            }
            )}
        </div>
    )
}


export { Assignment1, Assignment2, Assignment3, Assignment4, Assignment5 };
