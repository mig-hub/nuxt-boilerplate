export default async ( { store, from } ) => {
  if ( !store.state.contentLoaded ) {
    await store.dispatch( 'initState' )
  }
}

