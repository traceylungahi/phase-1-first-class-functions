const receivesAFunction = (spy) => {
    spy();
}
const returnsANamedFunction = () => (
    function spy() {}
)
const returnsAnAnonymousFunction = () => () => {};