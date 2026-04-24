const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const { calculateSum } = require('../calculator');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Testing Backend Features', () => {
    
    // Test for Calculation Function
    describe('Calculation Function: calculateSum', () => {
        it('should correctly calculate the sum of two numbers (Valid behaviour)', () => {
            const result = calculateSum(5, 7);
            expect(result).to.equal(12);
        });

        it('should throw an error if arguments are not numbers (Invalid/error behaviour)', () => {
            expect(() => calculateSum('5', 7)).to.throw('Both arguments must be numbers');
        });

        it('should handle negative numbers and zero properly (Edge cases)', () => {
            const result = calculateSum(-5, 0);
            expect(result).to.equal(-5);
            
            const result2 = calculateSum(0, 0);
            expect(result2).to.equal(0);
        });
    });

    // Test for REST API Endpoint
    describe('REST API Endpoint: /api/integrity-check42', () => {
        it('should return status 204 for integrity check (Valid behaviour)', (done) => {
            chai.request(app)
                .get('/api/integrity-check42')
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(204);
                    done();
                });
        });
        
        it('should return 404 for an invalid endpoint (Invalid/error behaviour)', (done) => {
            chai.request(app)
                .get('/api/invalid-endpoint')
                .end((err, res) => {
                    expect(res).to.have.status(404);
                    done();
                });
        });
    });
});
