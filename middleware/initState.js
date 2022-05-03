export default async function({ store, from }) {
  if ( !store.state.contentLoaded ) {
    await store.dispatch( 'initState' )
  }
}

