const inistate={
    indata:'',
	clickcount:0,
	linkactive:true
}

export default function reducer( state = inistate, action ) {
	switch ( action.type ) { 
	case "INDATA": return { indata : action.payload}
	case "CLICKCOUNT" : return { clickcount : state . clickcount + 1 }
	case "LINKACTIVE" : return { linkactive : action.payload}
	default : return state
}
}