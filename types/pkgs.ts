export interface jVarOpts {
    heads: string;
    tails: string;
    headsNoWrap?: string;
    tailsNoWrap?: string;
    lookForDataContainers?: boolean;
    dataContainerIdentifierTails?: string;
    wrapHeadsWith?: string | string[];
    wrapTailsWith?: string | string[];
    dontWrapVars?: string[];
    preventDoubleWrapping?: boolean;
    wrapGlobalFlipSwitch?: boolean;
    noSingleMarkers?: boolean;
    resolveToBoolIfAnyValuesContainBool?: boolean;
    resolveToFalseIfAnyValuesContainBool?: boolean;
    throwWhenNonStringInsertedInString?: boolean;
    allowUnresolved?: boolean;
}