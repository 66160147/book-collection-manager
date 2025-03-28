function Loading() {
    return (
      <div style={{ textAlign: 'center', padding: '20px', fontSize: '18px' }}>
        <span>Loading...</span>
        <div style={{ marginTop: '10px' }}>
          <span style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>⏳</span>
        </div>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }
  
  export default Loading;