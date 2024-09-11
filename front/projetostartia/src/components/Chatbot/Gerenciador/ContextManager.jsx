class ContextManager {
    constructor() {
      this.currentContext = null;
    }
  
    // Set the current context/flow
    setContext(contextName) {
      this.currentContext = contextName;
    }
  
    // Reset context to null (no active flow)
    resetContext() {
      this.currentContext = null;
    }
  
    // Get the current context/flow
    getContext() {
      return this.currentContext;
    }
  }
  
  const contextManager = new ContextManager();
  export default contextManager;
  